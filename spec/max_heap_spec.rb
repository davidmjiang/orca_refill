require "max_heap"
describe Maxheap do
	let(:heap){ Maxheap.new(5, "distance")}
	describe "add" do
		it "adds to an empty heap" do
			heap.add({location: "Disney", distance: 100})
			expect(heap.elements.length).to eq(1)
		end
		it "does not go above its size" do
			6.times do |i|
				heap.add({location: "Location#{i}", distance: rand(0..100)})
			end
			expect(heap.elements.length).to eq(5)
		end
	end
	describe "elements" do
		it "keeps the min 5 things" do
			10.times do |i|
				heap.add({location: "Location#{i}", distance: i})
			end
			expect(heap.elements.map{|i| i[:distance]}).to match_array([4,3,2,1,0])
		end
	end
end
