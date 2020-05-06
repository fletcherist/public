04.27.2020

i learned how to do a linear regression with one variable

04.28.2020

i learned how to do a linear regression with many variables

05.05.2020

so i need somehow to figure out how to train conditional wavenet. currently i've looked through some wavenet's implementation in keras and i dont find them satisfying. now looking through tensorflow implementation, but they're harder to understand what's going on. pipeline `wavenet(cyclegan(cqt(audio input)))` seems very promising, but unfortunately at the moment no implementation found on internet, i decided to implement on my own by reading the article. first i need to implement wavenet architecture and train it on `cqt(audio input)`. second i need to train cyclegan by using this [tutorial](https://www.tensorflow.org/tutorials/generative/cyclegan). and only then combine them two into a pipeline. if i success with this, planning to open-source it, so others could give it a try.

i played with [nsynth](https://magenta.tensorflow.org/datasets/nsynth#files) dataset, and i found it sound to be  really fucking bad :(

06.05.2020

The idea, that i proposed in approximately fall 2019 was successfully [implemented](https://github.com/magenta/ddsp) by Google Magenta team in january 2020. The idea is to modulate one instrument by another using timbre shifting. In their article they've demonstrated the usecase of modulating violin sound by human's sining. It sounds just awesome and you should definitely [listen](https://storage.googleapis.com/ddsp/index.html) to the examples.

The deeper i exploring the world of deep learning articles, the stronger is my opinion that ML technology would be definitely applied to «natural» music production (cinematic, orchestral, classical) in next 2 years as a production-ready tool for a composer or musician.