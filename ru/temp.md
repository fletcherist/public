# временные предложения

[04.25.2020 21:52]
пусть **f'(x)** - производная **f(x)**

1. `f'(x) > 0`, функция возрастает
2. `f'(x) < 0`, функция убывает
3. `f'(x) == 0`, функция не возрастает и не убывает (прямая линия на графике)
4. `f'(x) == 0` значит `f(x)` достигает максимального значения или минимального.

- почему в йога-сутре патанджали большинство русскоязычных переводов дают определение йоги (chitta vritti nirodha) как "остановки деятельности сознания"?

домен — то, в чём читта находит своё выражение

- дхарана на домене ведёт к переходу читты в этот домен.

Например, я переезжаю из россии в страну, где говорят на английском языке, и если я нахожусь там продолжительно долго, читта будет постепенно окрашиваться в слова английского языка, пока мышление на русском языке полностью не заместится мышлением на английском языке. После длительного чтения стихов на русском языке, читта выражается в строках, рифмующихся между собой. Среди прочего, интересным оказался шахматный домен, который был открыт случайно после нескольких дней непрерывной игры по несколько часов ежедневно — поток читты тогда был речью на русском языке, перемешиваясь иногда с образом случайной позиции на доске, где автоматически просчитывались варианты, подобно тому, как я делаю это во время игры с реальной позицией. Ещё один интересный домен — баховский домен, куда читта нередко попадает после продолжительного непрерывного прослушивания однообразной музыки, например органная 10 часов нон-стоп; выражается несколькими автосгенереннымы контрапунктных subject, которые как-то общаются между собой.

- «я» является функцией читты

cheeses

[A Neural Parametric Singing Synthesizer](https://mtg.github.io/singing-synthesis-demos/) - inputs are linguistic features. here we get a fantastic example with
https://arxiv.org/abs/1704.03809
https://mtg.github.io/singing-synthesis-demos/

[jukebox]

- [paper](https://cdn.openai.com/papers/jukebox.pdf)
- [openai blogpost](https://openai.com/blog/jukebox/)

1. compress raw audio with VQ-VAE

ClariNet

```py
# https://magenta.tensorflow.org/datasets/nsynth#files
traing = 'http://download.magenta.tensorflow.org/datasets/nsynth/nsynth-train.jsonwav.tar.gz'
validation = 'http://download.magenta.tensorflow.org/datasets/nsynth/nsynth-valid.jsonwav.tar.gz'
test = 'http://download.magenta.tensorflow.org/datasets/nsynth/nsynth-test.jsonwav.tar.gz'
```

# tries on making vocal dataset

```
youtube-dl --extract-audio --audio-format wav --output 1.mp4 https://youtu.be/222LeOd91ps
youtube-dl --extract-audio --audio-format wav --output 2.mp4 https://www.youtube.com/watch?v=lgScVTu7RqM
youtube-dl --extract-audio --audio-format wav --output 3.mp4 https://www.youtube.com/watch?v=d8cJPuXUuUs
youtube-dl --extract-audio --audio-format wav --output 4.mp4 https://www.youtube.com/watch?v=OuSLbqL8laU
```

# Projucer

host for debugging - open `~/JUCE/extras/AudioPluginHost/AudioPluginHost.jucer`
`~/Library/Audio/Plug-Ins/VST`

prevent from spamming into stdout `&> /dev/null`
download pretrained models

```bash
gsutil cp -r gs://ddsp/models/tf2/solo_violin_ckpt ~/pretrained
gsutil cp -r gs://ddsp/models/tf2/solo_flute_ckpt ~/pretrained
gsutil cp -r gs://ddsp/models/tf2/solo_flute2_ckpt ~/pretrained
gsutil cp -r gs://ddsp/models/tf2/solo_tenor_saxophone_ckpt ~/pretrained
gsutil cp -r gs://ddsp/models/tf2/solo_trumpet_ckpt ~/pretrained
```

tools for online jaming
https://jammr.net/

https://dotpiano.com/xV75KEqnAn3 good piano
https://experiments.withgoogle.com/drum-machine nice experiment clustering sounds

https://www.npmjs.com/package/webmidi
https://github.com/djipco/webmidi/blob/master/src/webmidi.js

https://yotammann.info/magentastudio

# install deno

```bash
sudo apt-get install unzip
curl -fsSL https://deno.land/x/install/install.sh | sh
```

# reload deno modules

https://github.com/denoland/deno/blob/master/docs/linking_to_external_code/reloading_modules.md
`deno --reload`

```bash
sudo su
nohup deno run --allow-net --reload=https://raw.githubusercontent.com/fletcherist/jamsandbox https://raw.githubusercontent.com/fletcherist/jamsandbox/master/server/mod.ts 80 &
```

ps -ef

https://www.youtube.com/watch?v=_RyLq5Pbw8M musorgsky 16:00 → strings section clear

```bash
log:
	ssh -t ${HOST} "cd ~/${PROJECT} && tail jambox.log -f"

push-local:
	cd ~/${PROJECT}
	kill -9 `pgrep deno` || true
	# deno run --allow-net ./server/mod.ts 80 > jambox.log 2>&1
	nohup deno run --allow-net ./server/mod.ts 80 > jambox.log 2>&1 &
push:
	rsync -avzL -r --exclude ${PROJECT} --exclude "node_modules" --exclude .git ~/${PROJECT}/ ${HOST}:~/${PROJECT}/ --delete
	ssh -t ${HOST} "cd ~/${PROJECT} && make push-local"
```
