INPUT = ['xc', 'dz', 'bbb', 'dz']
QUERY = ['bbb', 'ac', 'dz']

count = []

for i in QUERY:
    k = 0
    for j in INPUT:
        if i == j:
            k = k+1
    count.append(k)
print(count)
