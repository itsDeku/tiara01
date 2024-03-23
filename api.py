import flask
from flask import request, jsonify
import json
import pymongo
from bson.json_util import dumps
from flask_cors import CORS, cross_origin 
import uuid

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'application/json'

client = pymongo.MongoClient("mongodb+srv://newUser:1234@cluster0.syij2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",ssl=True,ssl_cert_reqs='CERT_NONE')
db = client.tiara

collection = db['userInfo']
collection1 = db['mflix']
collection2 = db['authentication']
collection3 = db['postsInfo']
results = collection2.find({'UserName':'typingPanda' })

# Create some test data for our catalog in the form of a list of dictionaries.
books = [
     {'id': 0,
       'title': 'A Fire Upon the Deep',
       'author': 'Vernor Vinge',
         'first_sentence': 'The coldsleep itself was dreamless.',
         'year_published': '1992'},
      {'id': 1,
       'title': 'The Ones Who Walk Away From Omelas',
         'author': 'Ursula K. Le Guin',
         'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
         'published': '1973'},
      {'id': 2,
       'title': 'Dhalgren',
         'author': 'Samuel R. Delany',
         'first_sentence': 'to wound the autumnal city.',
         'published': '1975'}
     ]


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Distant Reading Archive</h1>
    <p>A prototype API for distant reading of science fiction novels.</p>'''

    # A route to return all of the available entries in our catalog.

@app.route('/<userName>/<Password>', methods=['GET'])
def api_all(userName,Password):
    pipeline =[ 
      { '$match': {'UserName':userName,'UserPassword':Password }},
      { '$group': { '_id': '$UserID'}}
    ]
    aggregatedList = collection2.aggregate(pipeline)
    for res in aggregatedList:
      new = res
   
    pipeline2 = [
      {'$match': new }
    ]
    userInfoAggregated = collection.aggregate(pipeline2)
    for userinfo in userInfoAggregated:
      userInfo = userinfo
    
    return dumps(userInfo)

@app.route('/PostsData/<skip>/<limit>',methods=['GET'])
def postsdata(skip,limit):
  pipeline = [
    {'$match': {}},
    {'$sort' : { '_id': 1 } },
    {'$skip' : int(skip) },
    {'$limit': int(limit)},
  ]
  postsdata = collection3.aggregate(pipeline)
  for postdata in postsdata:
    postDatas = postdata
    
  return dumps(list(collection3.aggregate(pipeline)))

@app.route('/signin/<username>/<email>/<password>',methods=['POST'])
def inserts(username,email,password):
  id = uuid.uuid1()

  collection2.insert_one({
      'UserName' : username,
      'UserEmail' : email,
      'UserPassword' : password,
      'Userid': id.hex
    })
  USERINFO = {
    'userId':id.hex,
    'userName': username,
    'userPic': '',
    'userCoverPic': '',
    'bio': '',
    'tags': [],
    'postid':id.hex,
    'postInfo':{
      'postCount': 0,
      'followersCount': 0,
      'followingCount': 0

    }
  }
  collection.insert_one(USERINFO)

  return dumps(USERINFO)
  
   

app.run(debug=True)
