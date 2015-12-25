#
# Tools
#
# Author: Kelly Johnson
#

# Default settings, save contents (sans .zip) to unique name
seed?=SansQuery
name?=${seed}$(shell date "+%Y-%m-%d").zip
dest?=${name}
files?=$(shell ls|\grep -Ev '.zip|Makefile')

# `make` will give you 1 zip file of what you want
default: clean zip

# Get rid of old zips
clean:
	-rm *.zip

# Make zip of contents
zip:
	zip -r ${dest} ${files}
