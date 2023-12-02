<script>
	import "./main.css"
	export let data

	let postId = 0
	let newsId = 1
	let postData = data.posts[postId]

	$: {
		postData = data.posts[postId]
		newsId = postId + 1
	}

	const getPost = (p) => {
		if (p === 1) {
			postId < 98 ? (postId += 1) : ""
		} else {
			postId > 0 ? (postId -= 1) : ""
		}
	}
</script>

<div class="flex flex-col items-center h-full">
	<!-- start code for header section -->
	<div
		class="bg-blue-600 w-full text-center py-1 font-semibold text-white first-letter:text-2xl first-letter:text-yellow-300"
	>
		<h2>Dholpur 99</h2>
	</div>
	<!-- start code for news section -->
	<!-- This is an example component -->
	<div class="max-w-2xl flex-1 mx-2 my-6">
		<div
			class="shadow-md border rounded-lg max-w-sm bg-gray-800 border-gray-700 flex flex-col justify-between flex-1 h-full"
		>
			{#if postData?.imageUrl}
				<img class="rounded-t-lg w-full h-full max-h-56" src={postData.imageUrl} alt="" />
			{:else}
				<img
					class="rounded-t-lg w-full h-[218px]"
					src="https://i.imgur.com/5a1hTxW.jpeg"
					alt=""
				/>
			{/if}

			<div class="pt-4 px-2">
				<h5 class="font-bold text-base tracking-tight mb-2 text-white">
					{postData.title} - {newsId}
				</h5>
			</div>
			<div class="p-2">
				<p class="font-normal mb-3 text-gray-400 text-xs">
					{postData.bodyText}
				</p>
			</div>
			<div class="flex justify-between px-2 mb-3">
				<button
					on:click={() => getPost(0)}
					class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Prev
					<svg
						class="-mr-1 ml-2 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path></svg
					>
				</button>
				<button
					on:click={() => getPost(1)}
					class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Next
					<svg
						class="-mr-1 ml-2 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path></svg
					>
				</button>
			</div>
		</div>
	</div>
</div>
