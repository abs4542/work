'''
This is code to make a movies collection that a user can add to and view
'''

def addMovies():
    title = input("What is the title of the movie you want to add? ")
    director = input("What's the name of the director of this movie? ")
    releaseYear = input("What year was the movie released? ") 
    
    if movies:
        for movie in movies:
            if movie["title"] == title.title():
                sameTitleAdd = input("This movie title already exists in your collections. Are you sure you want to add another movie of the same title? Enter y for yes or n for no: ")
                if sameTitleAdd.lower() == "y":
                    break
                elif sameTitleAdd.lower() == "n":
                    return print("\nThis title already exists in your collection. Skipping this add.")
                else:
                    return print("\nInvalid option. Skipping this add.")

    if not releaseYear.isdigit():
        return print("\nThe release year needs to be all numbers. Try again!")
    else:    
        movies.append({
            "title": title.title(),
            "director": director.title(),
            "releaseYear": int(releaseYear)
        })



def listMovies():
    if movies:
        movieNames = [movie["title"] for movie in movies]
        print("Here's a list of movie titles you have in your collection:\n\n")
        for film in range(len(movieNames)):
            printMovies(movieNames[film])
    else:
        print("You have no movies added in your collection as of now. Please feel free to make some additions!")


def findMovies():
    movieSearch = input("Please input the title of the movie you're looking for: ")
    movieFound = [movie for movie in movies if movie["title"] == movieSearch.title()]
    if movieFound:
        print("\nWe found the movie thar you were looking for. Additional information is below:\n\n")
        for film in range(len(movieFound)):
            printMovies(movieFound[film])
    else:
        print("\nThe movie you were searching for isn't in your collection. You may add it when convenient!")


def printMovies(title):
    for movie in movies:
        if movie["title"] == title:
            print("Title: {}".format(movie["title"]))
            print("Director: {}".format(movie["director"]))
            print("Release Year: {}\n".format(movie["releaseYear"]))


userSelection = {
    "a": addMovies,
    "l": listMovies,
    "f": findMovies,
}

movies = []
MENUPROMPT = '''\nPlease input one of the following options for your movies collection:\n
                    Enter a to add a movie to your collection.\n
                    Enter l to list your movies.\n
                    Enter f to find a movie by title name.\n
                    Enter q to exit.\n'''

def userMenu():
    selection = input(MENUPROMPT)
    while selection:
        if selection.lower() in userSelection:
           selectedAction = userSelection[selection.lower()]
           selectedAction()
        elif selection.lower() == "q":
            print("It's a pleasure helping you grow and manage your movie collection! Until next time!")
        else:
            print("Invalid option. Please try again\n")
        
        if selection.lower() != "q":
            selection = input(MENUPROMPT)
        else:
            selection = None

userMenu()