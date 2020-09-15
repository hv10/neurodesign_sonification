import time
import asyncio
import pandas as pd

from bitalino import BITalino
from pathlib import Path
import matplotlib.pyplot as plt
from tqdm import tqdm
import numpy as np

macAddress = "98:D3:81:FD:61:E3"

running_time = 20

batteryThreshold = 30
acqChannels = [0, 1, 2, 3, 4, 5]
samplingRate = 100
nSamples = 100


def main():
    device = BITalino(macAddress)
    device.battery(batteryThreshold)
    print(device.version())

    device.start(samplingRate, acqChannels)

    start = time.time()
    end = time.time()
    samples = []
    try:
        while True:
            # Read samples
            data = device.read(nSamples)
            for row in data:
                samples.append(row)
            print(data[-1])
            print("> ", int(end - start), end=" | ")
            end = time.time()
    except KeyboardInterrupt:
        print("Exiting")
    finally:
        # Stop acquisition
        device.stop()
        # Close connection
        device.close()
        pd.DataFrame(samples).to_csv(Path(__file__).parent / f"recording_{start}.csv")


if __name__ == "__main__":
    main()
