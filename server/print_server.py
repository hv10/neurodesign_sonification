#!/usr/bin/env python

import asyncio
import websockets


async def print_msg(websocket, path):
    async for message in websocket:
        print(message)


start_server = websockets.serve(print_msg, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
