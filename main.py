from aiohttp import web
import motor.motor_asyncio

from routes import url_routes


def create_app() -> web.Application:
    client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://first_vpc,second_vpc,third_vpc/?replicaSet=rs0')
    db = client['chatdb']
    app = web.Application()
    app.db = db
    app.add_routes(url_routes)
    return app


def main():
    app = create_app()
    web.run_app(app, host='0.0.0.0', port=8080)


if __name__ == '__main__':
    main()
