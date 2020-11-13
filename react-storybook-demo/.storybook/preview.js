import React from "react"
import { addDecorator } from "@storybook/react"
import { withConsole } from "@storybook/addon-console"
import { withKnobs } from "@storybook/addon-knobs"
// import Center from "../src/components/Center/Center"
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core"

addDecorator(story => (
	<ThemeProvider theme={theme}>
		<CSSReset />
		<Box m="4">{story()}</Box>
	</ThemeProvider>
))

// addDecorator(story => <Center> {story()} </Center>)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withKnobs)
