***Activate the environment***
```
source blockchain-env/bin/activate
```

***Install dependencies***
```
pip3 install -r requirements.txt
```

**Run tests**
```
python3 -m pytest backend/tests
```

**Run the application and API**
Make sure to activate the virtual environment

```
python3 -m backend.app
```

**Run a peer instance**

Make sure to activate the virtual environment

```
export PEER=True && python3 -m backend.app
```

**Run the frontend**
```
npm run start
```

**Seed the backend with data**

Make sure to activate the virtual environment.

```
export SEED_DATA=True && python3 -m backend.app
```