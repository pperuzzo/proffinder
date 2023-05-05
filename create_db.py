import csv
import re

files = [
    "fall_2019/fall_2019_edited.csv", 
    "spring_2019/spring_2019_edited.csv", 
    "fall_2018/fall_2018_edited.csv", 
    "spring_2018/spring_2018_edited.csv",
    "fall_2017/fall_2017_edited.csv",
    "spring_2017/spring_2017_edited.csv",
    "fall_2016/fall_2016_edited.csv"
    ]
outputFile = "records.csv"

def processData():

    allRows = []

    for file in files:
        with open(file, encoding="utf8") as f:
            rows = []
            for row in csv.reader(f):
                rows.append(row)
            allRows.append(rows)

    with open(outputFile, 'r+', newline='', encoding="utf8") as out:
        writer = csv.writer(out)
        i = 0
        for rows in allRows:
            for row in rows:
                row.insert(0, i)
                i+=1
                writer.writerow(row)

processData()