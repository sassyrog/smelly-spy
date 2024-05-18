<template>
	<RouterView v-slot="{ Component}">
		<Transition name="fade" mode="out-in">
			<template v-if="Component">
				<KeepAlive>
					<Suspense>
						<!-- main content -->
						<template #default>
							<component :is="Component" :key="$route.params?.id"></component>
						</template>
						<template #fallback>loading...</template>
					</Suspense>
				</KeepAlive>
			</template>
		</Transition>
	</RouterView>
</template>

<script>
	export default {
		name: "App",
	};
</script>

<style>

</style>