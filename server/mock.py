import asyncio
import websockets
import time

MOCK_DATA = [[(k + i * 128) % 1024 for i in range(6)] for k in range(0, 1024, 128)]


async def mock_data(data):
    frame = 0
    while True:
        await websocket.send(str(data[frame]).rstrip("]").lstrip("[").replace(" ", ""))
        frame = (frame + 1) % len(data)
        await asyncio.sleep(0.1)


headers = {"Access-Control-Allow-Origin": "*"}
start_server = websockets.serve(mock_data, "127.0.0.1", 5678, extra_headers=headers)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
