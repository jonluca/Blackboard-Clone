# USC BlackBoard Clone

The live site can be found <a href="https://blackboardusc.com">here.</a>

## About

This is a proof of concept to illustrate how easy it is to create a phishing site that is somewhat believable. This site was created for ITP 325, Ethical Hacking and System Defense.

There is an overlay on the live site saying that it is not the real blackboard, with a link to this GitHub. 

## Stack

The original blackboard site was cloned utilizing HTTrack. I use a simple node/express backend to serve the files. 

Matching the suburls and routes was trivial, as we only care about the credential post request from myUSC. 