import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy_utils import database_exists, create_database

# Define your database connection
db_user = 'admin'
db_password = 'lIpw5wSpUYomxAy9O233'
db_host = 'secondcity.cr6amo0kc6sm.us-east-1.rds.amazonaws.com'
db_name = 'SecondCity'

# Create a SQLAlchemy engine
engine = create_engine(f'mysql+mysqlconnector://{db_user}:{db_password}@{db_host}/{db_name}')

# If the database doesn't exist, create it
if not database_exists(engine.url):
    create_database(engine.url)

# Read the CSV file into a DataFrame
df = pd.read_csv('cities_europe.csv')

# Write the data to a table in the database
df.to_sql('cities', engine, if_exists='replace', index=False)

# Try to read the data from the table
try:
    df = pd.read_sql_table('cities', engine)
    print("Data successfully written to MySQL database!")
except Exception as e:
    print("An error occurred:", e)