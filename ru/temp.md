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

[05.18.2020 02:35] ответ @dionysus о природе первопричины через аналогию фильма
Когда ты смотришь фильм, каждый предыдущий кадр переходит в следующий через какую-то причину, обусловленную сценарием, работой оператора, игрой актеров и другими вещами, которые сейчас не важны. И вот ты ставишь фильм на паузу, и картинка замирает. Вот эта замершая картинка и есть состояние с совокупностью причин, обусловленных предыдущими состояниями и готовых разрешиться в следствия в новом кадре, если отжать паузу. Например, падающая ваза, которая продолжит падать по определённой траектории со скоростью, которая обусловлена мгновенной скоростью в текущем кадре на паузе и законом, по которому она будет изменяться далее.

Теперь возьмём этот кадр с падающей вазой, вырежем его из ленты, поместим в гипотетической пустоте и назовём «первоначальным». Этому кадру теперь не предшествуют другие, и он независим от них, как от причины. Если в таком состоянии отжать паузу, дающую ход времени, ваза больше не сможет продолжать падать, как это было раньше, потому что этому не предшествовала причина, согласно которой она должна падать (её никто не толкнул, как это было в фильме). Ваза не начинала падать. Поэтому единственное, во что этот кадр с падающей вазой сможет перейти в следующий момент времени — это в самого себя. В следующий момент времени произойдёт то же самое постольку, поскольку опять же нет причины, способной детерминировать следующее состояние кадра, отличное от данного. И так будет продолжаться далее и далее. Если это так, то от чего отталкиваться, чтобы измерять время, если все кадры одинаковы? Какой выбрать за начало? Такая серия кадров во все моменты одинакова, и походит больше на статичную фотографию, нежели на фильм, поэтому определить время здесь не получится.

Я музыкант-любитель. У меня есть друзья-музыканты, и часто бывает мы собираемся вместе в одном помещении и играем импровизации. Это называется «джем». Сейчас мои друзья разъехались по разным городам, кто-то уехал домой, кто-то боится выбраться из дома, да и снять место для совместной игры стало очень трудно. Однако с этим, наше желание играть вместе нисколько не уменьшилось, поэтому я стал думать, как частично перенести этот опыт в онлайн.

Сначала мы попробовали играть в голосовых чатах: в дискорде и [mubmle](https://www.mumble.info/), однако вскорее убедились, что они совсем не подходят для этой задачи. голосовой WebRTC чат даже в пределах одного региона не может обеспечить задержку, необходимую для комфортной игры: мы постоянно сбивались с ритма, и общее впечатление от игры оставляло желать лучшего. Если вы хотите убедиться в этом сами, соберите дискорд на 4 человека и договоритесь «на счёт три» сказать что-нибудь (едва ли у вас получится сделать это синхронно). Тогда мне подумалось, что чтобы сократить задержку, вовсе не обязательно передавать аудиоинформацию, а достаточно будет передачи событий нажатия клавиши, отпускания клавиши, педали sustain и так далеее — другими словами, MIDI-события с последывающим проигрываниеем их на стороне клиента. Так появился jamhub.

Идея передавать MIDI через WebSocket не нова ([раз](https://github.com/McOmghall/midi-over-matrix) [два](https://github.com/hhromic/midi-websocket) [три](https://github.com/hhromic/midi-websocket)), но по моему мнению, она не получила должного развития в виде качественного сервиса, который даёт возможность музыканатам играть совместно онлайн. TODO
