import React, { FC } from 'react'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'

interface Props {
  open: boolean
  handleOpen: () => void
}

const PreviewDialog: FC<Props> = ({ open, handleOpen }) => {
  return (
    <Dialog open={open} size="xl" handler={handleOpen}>
      <DialogHeader>Project Preview</DialogHeader>
      <DialogBody divider className="h-[40rem] overflow-scroll">
        <Typography className="font-bold">You&apos;ll be able to see the preview of the project.</Typography>
        <Typography className="font-normal">
          I always felt like I could do anything. That&apos;s the main thing people are controlled by! Thoughts- their
          perception of themselves! They&apos;re slowed down by their perception of themselves. If you&apos;re taught
          you can&apos;t do anything, you won&apos;t do anything. I was taught I could do everything. As we live, our
          hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust
          for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our
          heart broken by people we love, even that we give them all we have. Then we lose family over time. What else
          could rust the heart more over time? Blackgold.
          <br />
          <br />
          We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re
          constantly making mistakes. We&apos;re constantly trying to express ourselves and actualize our dreams. If you
          have the opportunity to play this game of life you need to appreciate every moment. A lot of people don&apos;t
          appreciate the moment until it&apos;s passed.
          <br /> <br />
          There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good at. That&apos;s my
          skill. I&apos;m not really specifically talented at anything except for the ability to learn. That&apos;s what
          I do. That&apos;s what I&apos;m here for. Don&apos;t be afraid to be wrong because you can&apos;t learn
          anything from a compliment.
          <br /> <br />
          It really matters and then like it really doesn&apos;t matter. What matters is the people who are sparked by
          it. And the people who are like offended by it, it doesn&apos;t matter. Because it&apos;s about motivating the
          doers. Because I&apos;m here to follow my dreams and inspire other people to follow their dreams, too.
          <br /> <br />
          The time is now for it to be okay to be great. People in this world shun people for being great. For being a
          bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in
          what you believe in, if you were the only one who believed it? I always felt like I could do anything.
          That&apos;s the main thing people are controlled by! Thoughts- their perception of themselves! They&apos;re
          slowed down by their perception of themselves. If you&apos;re taught you can&apos;t do anything, you
          won&apos;t do anything. I was taught I could do everything. As we live, our hearts turn colder. Cause pain is
          what we go through as we become older. We get insulted by others, lose trust for those others. We get back
          stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love,
          even that we give them all we have. Then we lose family over time. What else could rust the heart more over
          time? Blackgold.
          <br />
          <br />
          We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re
          constantly making mistakes. We&apos;re constantly trying to express ourselves and actualize our dreams. If you
          have the opportunity to play this game of life you need to appreciate every moment. A lot of people don&apos;t
          appreciate the moment until it&apos;s passed.
          <br /> <br />
          There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good at. That&apos;s my
          skill. I&apos;m not really specifically talented at anything except for the ability to learn. That&apos;s what
          I do. That&apos;s what I&apos;m here for. Don&apos;t be afraid to be wrong because you can&apos;t learn
          anything from a compliment.
          <br /> <br />
          It really matters and then like it really doesn&apos;t matter. What matters is the people who are sparked by
          it. And the people who are like offended by it, it doesn&apos;t matter. Because it&apos;s about motivating the
          doers. Because I&apos;m here to follow my dreams and inspire other people to follow their dreams, too.
          <br /> <br />
          The time is now for it to be okay to be great. People in this world shun people for being great. For being a
          bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in
          what you believe in, if you were the only one who believed it?
        </Typography>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" size="sm" color="blue-gray" onClick={handleOpen} className="mr-1">
          <span>Close</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export default PreviewDialog
