x = "NEGIE1"
temp = []
result = []
for i in reversed(range(len(x))):
    try:
        temp.append(int(x[i]))
    except:
        temp.append(x[i])
for i in temp:
    result.append(i) if type(i) != int else None
for i in temp:
    result.append(i) if type(i) == int else None
print(''.join(str(e)for e in result))
