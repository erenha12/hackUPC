import botocore
import botocore.session


def get_secret(key: str) -> dict():
    """
    Utility function to get any secret from aws s3.
    :param key:
    :return: A json that has the secret saved in aws secrets manager
    """
    # client = botocore.session.get_session().create_client('secretsmanager')
    # return client.get_secret_value(key)
    return {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": "/home/beedata/Documents/uni/SMDE/secondcity/db.sqlite3",
    }
