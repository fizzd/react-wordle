with open("malay-text.txt", "r", encoding="utf-8") as f:
    words = [line.strip().split()[0] for line in f if len(line.strip().split()[0]) == 6]

with open("malay_6_letter_words2.txt", "w", encoding="utf-8") as out:
    for word in words:
        out.write("\'"+ word + "\',\n")

print(f"Saved {len(words)} words to malay_6_letter_words.txt")