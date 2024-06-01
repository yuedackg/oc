import random

# おみくじの結果リスト
fortunes = ['大吉', '吉', '凶', '大凶']

# ランダムにおみくじの結果を選ぶ
fortune = random.choice(fortunes)

# 結果を表示する
print(fortune)