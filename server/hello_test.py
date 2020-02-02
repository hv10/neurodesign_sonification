#!/usr/bin/env python

import asyncio
import websockets


async def hello():
    uri = "ws://localhost:8765"
    async with websockets.connect(uri) as websocket:
        while True:
            await websocket.send(input(">"))
            recv = await websocket.recv()
            print("<", recv)


asyncio.get_event_loop().run_until_complete(hello())
