import csv
import re

inputFile = "records.csv"
outputFile = "records_edited.csv"



def checkTotal():
    with open(inputFile, encoding="utf8") as inp:
        for row in csv.reader(inp):
            total = int(row[5]) + int(row[6]) + int(row[7]) + int(row[8]) + int(row[9]) + int(row[10]) + int(row[11]) + int(row[12]) + int(row[13]) + int(row[14])
            if not int(total) == int(row[15]):
                print("Different values on " + str(row[0]) + " :" + str(total) + " and " + str(row[15])) 

def processData():
    with open(inputFile, encoding="utf8") as inp, open(outputFile, 'r+', newline='', encoding="utf8") as out:
        writer = csv.writer(out)
        
        for row in csv.reader(inp):
            total = int(row[5]) + int(row[6]) + int(row[7]) + int(row[8]) + int(row[9]) + int(row[10]) + int(row[11]) + int(row[12]) + int(row[13]) + int(row[14])
            if not int(total) == int(row[15]):
                print("Different values on " + str(row[0]) + " :" + str(total) + " and " + str(row[15])) 



