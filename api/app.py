from flask import Flask, request, redirect
from spotipy.oauth2 import SpotifyOAuth
import pandas as pd
import spotipy
from flask_cors import CORS, cross_origin
from spotipy import util

CLIENT_ID='7d11d070be794a67b9ccf4510e835f7d'
CLIENT_SECRET='5c2c25515cb14fad955d8577394bbc7c'

app = Flask(__name__)
# cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

auth = SpotifyOAuth(CLIENT_ID,
                    CLIENT_SECRET, 
                    redirect_uri ="http://127.0.0.1:5000/callback/q", # add to app whitelist
                    scope="user-read-currently-playing user-library-read user-read-recently-played user-top-read")

@app.route("/")
def show_status():
    cached_token = auth.get_cached_token()
    if (cached_token):
        return cached_token
    else:
        return "not logged in"


# Routes
@app.route("/auth")
def authenticate():

    url = auth.get_authorize_url()
    return redirect(url)
    #     if code:
    #         print("Found Spotify auth code in Request URL! Trying to get valid access token...")
    #         token_info = auth.get_access_token(code)
    #         access_token = token_info['access_token']

    # if access_token:
    #     print("Access token available! Trying to get user information...")
    #     sp = spotipy.Spotify(access_token)
    #     results = sp.current_user()
    #     return results

    # else:
    #     return f"logged in with token {access_token}"



    # At this point you can now create a Spotify instance with
    # sp = spotipy.client.Spotify(auth=token)

    # songs = sp.current_user_recently_played(limit=100)
    # return songs


@app.route("/callback/q")
def callback():
    code = auth.parse_response_code(request.url)
    token_query = auth.get_access_token(code=code, check_cache=False)
    
    access_token = token_query['access_token']
    refresh_token = token_query['refresh_token']
    
    # return access_token
    
    # token = auth.get_access_token(code)
    # Once the get_access_token function is called, a cache will be created making it possible to go through the route "/" without having to login anymore
    
    return redirect("/recents") ## << replace google with the app name

@app.route("/recents")
def recents():
    token_info = auth.get_cached_token()
    
    if (token_info):
        token = token_info['access_token']

        sp = spotipy.client.Spotify(auth=token)
        songs = sp.current_user_top_tracks(limit=5)
        items = songs["items"]

        top = []

        for item in items:
             top.append(item['name'])
    
    return {"items": top}


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)