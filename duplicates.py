import pandas as pd
data = pd.read_csv("records_to_analyze.csv")
with pd.option_context('display.max_rows', None, 'display.max_columns', None):
    print(data.duplicated(subset=['Course']))