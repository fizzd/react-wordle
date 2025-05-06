def normalize(word):
    return word.strip().lower().replace("'", "").replace(",", "")

# Load dictionary into a set for fast lookup
with open('malay_6_letter_words_kamus.txt', encoding='utf-8') as f:
    dictionary_set = set(normalize(line) for line in f if line.strip())

# Load input words
with open('malay_6_letter_words_popular.txt', encoding='utf-8') as f:
    input_words = [normalize(line) for line in f if line.strip()]

# Separate matched and unmatched
matched = [word for word in input_words if word in dictionary_set]
unmatched = [word for word in input_words if word not in dictionary_set]

# Write output files in your desired format
with open('matched_words.txt', 'w', encoding='utf-8') as f:
    for word in matched:
        f.write(f"'{word}',\n")

with open('unmatched_words.txt', 'w', encoding='utf-8') as f:
    for word in unmatched:
        f.write(f"'{word}',\n")

print("Done. Matched and unmatched words written to files.")