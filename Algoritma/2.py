sentence = "Saya sangat senang mengerjakan soal algoritma"


def getMaxLen(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if len(arr[j]) > len(arr[j+1]):
                arr[j], arr[j+1] = arr[j+1], arr[j]

    return arr[n-1]


x = sentence.split(' ')
print(f'{getMaxLen(x)}, total karakter :  {len(getMaxLen(x))}')
