- loss - насколько предсказание отличается от нужного результата. В случае для списка пар `(x, y)` часто используется среднеквадратичная ошибка. Пусть `y` — это судьбой предначертанное в зависимости от `x`. Пусть `f(x)` пытается угадать, какая судьба `y` ожидаеет `x`, `square` возводит число в квадрат, тогда `square(f(x) - y)` показывает насколько вангование точно (если 0 — значит сбудется, чем больше это число — тем хуже ванга `f(x)` нагадала для `y`). Задача машинного обучния — сделать вангование более точным, в этих терминах нужно сделать `square(f(x) - y)` как можно меньше. Для двух пар данных `(x1, y1) (x2, y2)` будет так: `square(f(x1) - y1) + square(f(x2) - y2)` - чем меньше это число, тем точнее прогноз для двух примеров. Для `N` пар данных будет так:

```ts
const loss = (x: number, y: number): number => square(f(x) - y)
const sum = (list: number[]): number => list.reduce((acc, element) => acc + element, 0)

const lossAll = sum([[x1, y1], [x2, y2], ..., [x, y]].map(([x, y]) => loss(x, y)))
// i want lossAll to be a small value
```

# loss

`f(x)` is an inference

mean absolute error - средняя ошибка. нормас для регрессии

```ts
const loss = (x: predict[], y: output[]): number =>
  (1 / x.length) *
  compose(
    sum,
    map((x, i) => f(x) - y[i])
  )(x);
```

mean squared error - средняя ошибка в квадрате. супер топ для регрессии

```ts
const loss = (x: predict[], y: output[]): number =>
  (1 / x.length) *
  compose(
    sum,
    squared,
    map((x, i) => f(x) - y[i])
  )(x);
```

binary cross-entropy

```py
from math import log

# calculate binary cross entropy
def binary_cross_entropy(actual, predicted):
	sum_score = 0.0
	for i in range(len(actual)):
		sum_score += actual[i] * log(1e-15 + predicted[i])
	mean_sum_score = 1.0 / len(actual) * sum_score
	return -mean_sum_score
```

- what is Dense layer in Keras
- what is differential?
- what is [gradient](https://en.wikipedia.org/wiki/Gradient), gradient descent?
- how to calculate gradient for a matrix (with layer weights) (for multi variable function this a vector with partial deriatives of all arguments)


download dataset in google colab
```py
from google.colab import files
files.download('example.txt')  # from colab to browser download
uploaded = files.upload() # then browse, select the files. It's then uploaded

from google.colab import drive
drive.mount('/content/gdrive')
```
download something to google drive
```py
import requests
file_url = "http://download.magenta.tensorflow.org/datasets/nsynth/nsynth-test.jsonwav.tar.gz"
r = requests.get(file_url, stream = True)  
with open("/content/gdrive/My Drive/python.pdf", "wb") as file:  
    for block in r.iter_content(chunk_size = 1024): 
         if block:  
             file.write(block)
```
unzip tar archive
```bash
%%bash
mkdir -p "/content/gdrive/My Drive/layers/nsynth"
tar -xvf '/content/gdrive/My Drive/layers/nsynth-test.jsonwav.tar.gz' -C '/content/gdrive/My Drive/layers/nsynth'
```

good spectral operations
https://github.com/skmhrk1209/GANSynth/blob/master/spectral_ops.py




