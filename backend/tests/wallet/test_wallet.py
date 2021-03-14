from backend.wallet.wallet import Wallet
import pytest

@pytest.fixture
def data():
    return {'foo': 'bar'}

def test_verify_valid_wallet_signature(data):
    wallet = Wallet()
    signature = wallet.sign(data)

    assert wallet.verify(wallet.public_key, data, signature)

def test_verify_invalid_wallet_signature(data):
    wallet = Wallet()
    signature = wallet.sign(data)

    assert not wallet.verify(Wallet().public_key, data, signature)