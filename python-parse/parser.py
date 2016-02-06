print "-----------------------"

filename_source = "digits_stripped_column_remove_w.txt"

source_file = open(filename_source).read()

ultimate_array = []

target_file = open("digits_array.txt", 'w')

print "length: %s" % len(source_file)

with open(filename_source) as data:
	# head = [next(data) for x in xrange(10)]
	# 	print head
	# for line in data:
	# 	print "original line %s" % line
	# 	stripped_line = line[:11]+line[12:]
	# 	stripped_line = stripped_line[:23] + stripped_line[24:]
	# 	stripped_line = stripped_line[:35] + stripped_line[36:]
	# 	stripped_line = stripped_line[:47] + stripped_line[48:]
	# 	# print "stripped line %s" % stripped_line
	# 	target_file.write(stripped_line)
	# 	# raw_input('>continue?')

	for line in data:
		clean_line = line.replace('\n', ',')
		singleton = clean_line.replace(' ',',')
		print singleton
		target_file.write(singleton)

	# print ultimate_array
	

	

target_file = open("digits_stripped_column_remove_w.txt").read()
print "done writing %s lines to %s" % (len(target_file), target_file)