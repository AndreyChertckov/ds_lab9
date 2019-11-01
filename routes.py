from aiohttp import web
import handlers

url_routes = [
    web.post('/api/message/', handlers.post_message),
    web.get('/api/message/', handlers.get_messages),
    web.get('/api/ping/', handlers.ping)
]
