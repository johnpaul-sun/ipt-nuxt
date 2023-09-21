<template>
	<div class="flex bg-slate-100 min-h-screen flex-col gap-10 justify-between">
		<div class="p-5">
			<img src="../shared/assets/images/logo.png" alt="logo" class="h-20" />
		</div>

		<div class="flex h-full px-10 flex-wrap justify-center gap-5">
			<div class="flex justify-center items-center">
				<img
					src="../shared/assets/images/impaulintech.png"
					alt="impaulintech-image"
					class="h-100"
				/>
			</div>
			<div class="flex flex-col h-full justifycenter items-start gap-10">
				<p class="text-[24px]">
					Welcome to my <span class="font-medium">default</span> custom
					Template. <br />
					Server is up and running at
					<span class="font-medium">{{ getHost() || "localhost" }}</span>
				</p>
				<p class="text-[36px] flex flex-col font-bold">
					<span>Hi</span>
					<span>ImPaulinTech</span>
					<span>and I tell computers what to do.</span>
				</p>
				<p class="text-[24px] max-w-[600px]">
					This is a customized template, and I changed the project structure to
					make it easier to manage.
				</p>
			</div>
		</div>

		<footer class="w-full flex items-center justify-center pb-5">
			<p>© ImPaulinTech 2022</p>
		</footer>
	</div>
</template>

<script>
export default {
	methods: {
		getHost() {
			if (process.client) {
				return window.location.host;
			}
		},
	},
};
</script>
