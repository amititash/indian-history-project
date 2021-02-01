import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack, Menu } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index1"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				The Indian History Project
			</Text>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1470075446540-4391a96ec621?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Book Summary BY ANAHITA NEOgi
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						India through archeology : excavating history{"  "}
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					CONTINUE
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				CHAPTER 2 - SNAPSHOTS FROM THE PAST{" "}
			</Text>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						background="url(https://uploads.quarkly.io/6005bd13d34e73001fe64d92/images/Cattle%20bhimbetka%20painting.jpg?v=2021-01-23T09:59:38.902Z) 50% 15%/cover"
						lg-margin-right="0"
						lg-padding-bottom="80%"
						opacity="20"
						filter="grayscale(0%)"
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%" height="500px">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-red"
						color="--light"
						mix-blend-mode="lighten"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
						height="500px"
					/>
					<Text as="h1" margin="0 0 16px 0" font="--headline2" lg-font="--headline2">
						What is bhimbetka?
					</Text>
					<Text as="p" margin="16px 0" font="--lead" max-width="400px">
						Bhimbetka is an archeological site in India which shows signs of human habitation from the palaeolithic to historic times.
						<br />
						<br />
						{" "}Ancient practices and artistic styles have been discovered here and have continued into modern times, in the lifestyles of adivasi communities living nearby.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/6005bd13d34e73001fe64d92/images/Bhimbetka%20Caves.jpg?v=2021-01-23T10:09:34.966Z) center/cover">
			<Box
				max-width="540px"
				padding="50px 80px 80px 50px"
				background="--color-light"
				color="--dark"
				text-align="left"
			>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					When and where was it discovered?
				</Text>
				<Text font="--base">
					{" "}An archaeologist named V.S. Wakankar discovered the Bhimbetka caves in 1957 whilst travelling by train from Bhopal to Itarsi in central India.{" "}
					<br />
					<br />
					He discovered more than 700 caves and rock shelters, spread over a vast area. Over 400 of them contained cave paintings that appeared to be very old.
					<br />
					<br />
					{" "}Wakankar came back and began excavations with a team and discovered hundreds of prehistoric stone tools layered in the dirt floors of the caves and shelters dating back to 100,000 and 3000 years ago.
				</Text>
			</Box>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/6005bd13d34e73001fe64d92/images/chris-10xhSAZdnf4-unsplash.jpg?v=2021-01-23T09:25:49.851Z) center/cover">
			<Box max-width="540px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About stone tools
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					How were they made?
				</Text>
				<Text font="--base">
					The oldest and most basic method was to use a stone to shape a stone, where one was used as a hammer on another and the flakes came off until the stone tool was ready.{" "}
					<br />
					<br />
					Another method was to strike a large stone against a fixed boulder to break off large flakes.
					<br />
					<br />
					A better and more refined technique would be using bone and wooden punches to exert controlled pressure that would detach finer flakes.
				</Text>
			</Box>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%" opacity="50">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						background="url(https://uploads.quarkly.io/6005bd13d34e73001fe64d92/images/caveman.jpg?v=2021-01-23T09:26:41.378Z) 50% 15%/cover"
						lg-margin-right="0"
						lg-padding-bottom="80%"
						border-color="#fc0404"
						filter="grayscale(0%)"
						width="480px"
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-red"
						color="--light"
						mix-blend-mode="lighten"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						Home erectus
					</Text>
					<Text
						as="h1"
						margin="0 0 16px 0"
						font="--headline1"
						lg-font="--headline2"
						color="#ffffff"
					>
						What about the people that used and made them?
					</Text>
					<Text as="p" margin="16px 0" font="--base" max-width="400px">
						The earliest tool maker was Homo Erectus. They used sharp stone tools to hunt instead of scavenging animal carcasses.{" "}
						<br />
						<br />
						<br />
						Since stone was the most easily available material, it was used to make sharp axes, scrapers and blades to cut and clean animal skin, chopping tools and diggers.
						<br />
						<br />
						<br />
						{" "}Homo Erectus was probably the first to use fire and cook their food. The harnessing of fire meant the ability to keep their shelters warm and maybe even gather in sociable groups.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				Meet the team
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				This colorful book extract brought to you by
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6005bd13d34e73001fe64d92/images/avataaars.png?v=2021-01-25T14:39:47.734Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						The Tech{" "}
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						My Dad
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Titash Neogi is the name of my father, the co - founder of Adaptiv.me. He is very hardworking and works every minute of the day. He loves his daughter, Arya, and loves his work. He believes everyday is a holiday when you are doing what you love.{" \n "}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6005bd13d34e73001fe64d92/images/Devika_Cariapa.jpg?v=2021-01-28T10:46:22.144Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						The brains
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Devika Cariappa{" "}
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Devika Cariapa is the author that wrote the book India through Archaeology : Excavating History that inspired this website. This book has been awarded  the Hindu Young World-Good Books Award 2018 and the Sahitya Akademi's Bal Sahitya Puraskar 2019.  Archaeology has been her life - long passion and she loves unearthing stories from the past.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6005bd13d34e73001fe64d92/images/IMG_20210106_084022_2.jpg?v=2021-01-25T14:43:58.698Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						The Inspiration
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Arya{" "}
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Arya is an energetic dog that loves to play and loves attention. She is incredibly smart as well and can sense the emotions of her parents. She loves wrestling with papa, and playing tug of war!
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6005bd13d34e73001fe64d92/images/Anahita.png?v=2021-01-25T14:42:17.267Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						The perspiration
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						And Me!
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						I am an eleven year old girl who studies in Bangalore. I enjoy reading, writing, drawing, playing badminton and listening to music. I aspire to become an author one day. I have made this website with the help of my father. I really enjoyed reading Devika Cariappa’s book as it contained a lot of information that isn't always visible in Indian history, such as the toll pass of Naneghat and the mysterious disappearance of the trading town of Muziris along the Malabar Coast. After reading this book, I have made 15 slideshows based on each of the chapters, and from there this website was born.{" "}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});