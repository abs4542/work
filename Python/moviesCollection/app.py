'''
This is code to make a movies collection that a user can add to and view
'''
from pprint import pprint
def addMovies():
    title = input("What is the title of the movie you want to add? ")
    director = input("What's the name of the director of this movie? ")
    releaseYear = input("What year was the movie released? ") 
    
    return title.title(), director.title(), releaseYear


def listMovies():
    if movies:
        movieNames = [movie["title"] for movie in movies]
        print("Here's a list of movie titles you have in your collection:\n{}".format(movieNames))
    else:
        print("You have no movies added in your collection as of now. Please feel free to make some additions!")


def findMovies(title):
    movieFound = [movie for movie in movies if movie["title"] == title]
    if movieFound:
        print("We found the movie thar you were looking for. Additional information is below:\n{}".format(movieFound))
    else:
        print("the movie you were searching for isn't in your collection. You may add it when convenient!")


movies = []
MENUPROMPT = '''Please input one of the following options for your movies collection:\n
                    Enter a to add a movie to your collection.\n
                    Enter l to list your movies.\n
                    Enter f to find a movie by title name.\n
                    Enter q to exit.\n'''
selection = input(MENUPROMPT)

while selection:
    if selection.lower() == "a":
        title, director, releaseYear = addMovies()
        if not releaseYear.isdigit():
            print("The release year needs to be all numbers. Try again!")
        else:    
            movies.append({
                "title": title,
                "director": director,
                "releaseYear": int(releaseYear)
            })
    elif selection.lower() == "l":
        listMovies()
    elif selection.lower() == "f":
        movieSearch = input("Please input the title of the movie you're looking for: ")
        findMovies(movieSearch.title())
    elif selection.lower() == "q":
        print("It's a pleasure helping you grow and manage your movie collection! Until next time!")
    else:
        print("Invalid option. Please try again\n")
    
    if selection.lower() != "q":
        selection = input(MENUPROMPT)
    else:
        selection = None