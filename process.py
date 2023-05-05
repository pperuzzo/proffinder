import csv
import re

inputFile = "fall_2016/fall_2016.csv"
outputFile = "fall_2016/fall_2016_edited.csv"

# Leave Section in the dataset
table_header = ["Department", "Subject", "Course", "Instructor", "A", "B", "C", "D", "F", "IX", "NP", "P", "RD", "W", "Total", "Semester", "Year"]
# Department,Subject,Course,Instructor,A,B,C,D,F,IX,NP,P,RD,W,Total,Semester,Year
shouldAddHeader = False
semester = "Fall"
year = 2016

# Indexes 0 based
department_index = 0
subject_index = 1
course_index = 2
instructor_index = 3
a_index = 4

shouldRemoveSection = False
section_index = 3

fixToDepartments = {
    "Communicati..": "Communication",
    "Communicati": "Communication",
    "Computer Sci": "Computer Science",
    "Computer Science an": "Computer Science", 
    "CSIS": "Computer Science",
    "Computer Scien": "Computer Science",
    "Computer Science and Information Systems": "Computer Science",
    "Disabled Students Center": "Disabled Student Services", 
    "Disabled Students Ce": "Disabled Student Services",
    "Disabl Stu Ctr": "Disabled Student Services",
    "Disabled Studen": "Disabled Student Services",
    "Disabled Stud": "Disabled Student Services",
    "Modern Languages a": "Modern Languages and Cultures", 
    "Modern Lang/Cul": "Modern Languages and Cultures",
    "Modern Langua": "Modern Languages and Cultures",
    "Modern Lang": "Modern Languages and Cultures",
    "Philosophy and Socia": "Philosophy and Social Sciences",
    "Philosophy/Soci": "Philosophy and Social Sciences",
    "Philosophy and": "Philosophy and Social Sciences",
    "Philosophy an": "Philosophy and Social Sciences",
    "Education/E..": "Education/ECE",
    "Education/EC": "Education/ECE",
    "Design Technolo": "Design Technology",
    "Design Tech.": "Design Technology",
    "Design Techn": "Design Technology",
    "Math": "Mathematics",
    "Photography and Fas": "Photography and Fashion",
    "Photo ‐ Fashion": "Photography and Fashion",
    "Photo - Fashion": "Photography and Fashion",
    "Photography an": "Photography and Fashion",
    "Photography": "Photography and Fashion",
    "Physical Sci": "Physical Science",
    "Physical Scien": "Physical Science",
    "Health Scienc": "Health Sciences"
}


def processData():
    with open(inputFile, encoding="utf8") as inp, open(outputFile, 'r+', newline='', encoding="utf8") as out:
        writer = csv.writer(out)
        
        # Remove rows with "Total" in it
        rows = []
        for row in csv.reader(inp):
            found = False
            for col in row:
                if col.__contains__("Total"):
                    found = True
            if found == False:
                rows.append(row)
            else:
                found = False
        
        # Fill Missing
        prevRow = []
        for row in rows:

            # Department
            if row[department_index] == "":
                if prevRow:
                    row[department_index] = prevRow[department_index]
            else:
                row[department_index] = clearString(row[department_index])
                row[department_index] = checkDepartmentName(row[department_index])

            # Subject
            if row[subject_index] == "":
                if prevRow:
                    row[subject_index] = prevRow[subject_index]
            else:
                row[subject_index] = clearString(row[subject_index])
        
            # Course
            if row[course_index] == "":
                if prevRow:
                    row[course_index] = prevRow[course_index]
            else:
                row[course_index] = clearString(row[course_index])

            # Instructor
            if row[instructor_index].__contains__("/"):
                row[instructor_index] = row[instructor_index].split("/", 1)[0]
                row[instructor_index] = row[instructor_index].replace('‐','-')
                
            row[instructor_index] = clearString(row[instructor_index])
            
            # Grades
            for index in range(a_index, len(row)):
                if row[index] == "":
                    row[index] = 0

            row.append(semester)
            row.append(year)

            if shouldRemoveSection == True:
                row.remove(row[section_index])
            prevRow = row
                    
        # Add table header
        if shouldAddHeader == True:
            rows.insert(0, table_header)
        for row in rows:
            writer.writerow(row)
        
def checkDepartmentName(dep):
    if dep in fixToDepartments:
        return fixToDepartments[dep]
    else:
        return dep

def clearString(s):
    s = s.strip()
    s = s.replace('\n',' ')
    s = s.replace('\t',' ')
    s = s.replace('"','')
    s = s.replace(',','')
    s = re.sub(' +', ' ', s)
    return s

processData()

#SIMON D L