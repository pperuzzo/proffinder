import pandas as pd
data = pd.read_csv("fall_2016/fall_2016_edited.csv")
with pd.option_context('display.max_rows', None, 'display.max_columns', None):
    print(data.Department.unique())