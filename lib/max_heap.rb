class Maxheap
	attr_reader :elements
	def initialize(size, orderBy)
		@elements = []
		@size = size
		@orderBy = orderBy.to_sym
	end

	# orderBy says which attribute to order on
	def add(el)
		if(@elements.length < @size)
			@elements.push(el)
			bubble_up()
		elsif el[@orderBy] < max
			# remove the max
			bubble_down()
			# add the new element
			@elements.push(el)
			bubble_up()
		end
	end

	private

	def max
		@elements[0][@orderBy]
	end

	# used when replacing the max
	def bubble_down()
		# remove max and swap with last node
		@elements[0] = @elements.pop
		i = 0
		while(i < @elements.length)
			max_idx = i
			# find greater of left and right child
			if((2*i + 1) < @elements.length && @elements[2*i + 1][@orderBy] >= @elements[max_idx][@orderBy])
				max_idx = 2*i + 1
			end
			if((2*i + 2) < @elements.length && @elements[2*i + 2][@orderBy] >= @elements[max_idx][@orderBy])
				max_idx = 2*i + 2
			end
			# if left or right child is greater, swap and update i
			if(max_idx != i)
				swap(i, max_idx)
				i = max_idx
			# if not, we are done
			else
				break
			end
		end
	end

	# used when adding an element
	def bubble_up()
		i = @elements.length - 1
		while(i > 0)
			# compare with its parent. swap if parent is less than it
			if @elements[(i-1)/2][@orderBy] >= @elements[i][@orderBy]
				break
			else
				swap((i-1)/2, i)
				i = (i-1)/2
			end
		end
	end

	def swap(i, j)
		temp = @elements[j]
		@elements[j] = @elements[i]
		@elements[i] = temp
	end

end