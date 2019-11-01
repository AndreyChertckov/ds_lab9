from aiohttp.web import Request, Response, json_response
import datetime


async def get_messages(request: Request) -> Response:
    messages = await request.app.db['messages'].find().sort([['_id', -1]]).to_list(30)
    messages = [message for message in messages if message.pop('_id')]
    for message in messages:
        message['time'] = str(message['time'])
    return json_response({"status": "ok", "messages": messages})


async def post_message(request: Request) -> Response:
    data = await request.json()
    print(type(data))
    data['time'] = datetime.datetime.now()
    result = await request.app.db['messages'].insert_one(data)
    return json_response({'status': 'ok'})


async def ping(request: Request) -> Response:
    return json_response({'status': 'ok'})
