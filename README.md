# Iron Man (React)

## This is a collaboration between Kristján Jóel and Kevin Freyr

### Our first concept is a Tetris game made with React



## How it works

1. User goes to *URL*
2. On the homepage there is an input field where the user inputs a number *X* that represents the number of voters
3. The website generates *X* different links that the user needs to distribute
    * example: http://example.com/#/vote/id=c123-c560 
        * first part of the ID is the ID of the instance
        * second part of the ID represents a voter
4. Voter goes to the link
    * website checks if 
        * a) Instance ID is valid
        * b) Voter ID is valid
5. Voter chooses hits options and hits send
6. When all *X* voters have finished, the results are sent to the user