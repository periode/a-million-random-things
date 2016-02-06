source_file = open("digits_array.txt").read()
target = open("full_utterances.txt", 'w')
utterances = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
source_list = source_file.split(',')

all_utterances = []

for line in source_list:
	# print "current line: %s" % line
	i = 0
	full_utterance = []
	while i < len(line):
		current_utterance = utterances[int(line[i])]
		full_utterance.append(current_utterance)
		i+=1
	all_utterances.append(full_utterance)

# print "final: %s" % all_utterances
target.write("\n".join([",".join([str(n) for n in item]) for item in all_utterances]))
target.close()

print "successfully written %s lines" % len(all_utterances)