import Email from 'next-auth/providers/email';

const Privacy = () => {
  return (
    <section className='w-full flex-center flex-col  text-slate-600 text-center'>
      <h1 className='text-xl text-slate-900'>Privacy Policy</h1>
      <br />
      <p>
        <h2 className='text-lg text-slate-800'>Data Collection & Storage</h2>
        <p>
          Promptopia will receive, collect and store any information you enter
          on our website or provide us in any other way. In addition, we collect
          the profile name; login; e-mail address. We may use software tools to
          measure and collect session information, including page response
          times, length of visits to certain pages, page interaction
          information, and methods used to browse away from the page. We also
          collect personally identifiable information including name, email, and
          posts. By continuing with sign-in authorization, Google will share
          your name, email address, language preference, and profile picture
          with Promptopia.
        </p>
      </p>
      <h2 className='mt-4 text-lg text-slate-800'>Collection Process</h2>
      <p>
        When you post on our website, as part of the process, we collect
        personal information you give us such as your profile name and email
        address. Your personal information will be used for the specific reasons
        stated above only.
      </p>
      <h2 className='mt-4 text-lg text-slate-800'>
        Storage, use, share and disclosure of your personal information
      </h2>
      <p>Your data may be stored on MongoDB databases.</p>
      <br />
      <h2 className='mt-4 text-lg text-slate-800'>
        Communication with visitors
      </h2>
      <p>
        We may contact you to notify you regarding your account, to troubleshoot
        problems with your account, to resolve a dispute or as otherwise
        necessary to contact you to enforce our User Agreement, applicable
        national laws, and any agreement we may have with you. For these
        purposes we may contact you via email.
      </p>
      <h2 className='mt-4 text-lg text-slate-800'>
        Cookies and other tracking tools
      </h2>
      <p>
        Users will be prompted to sign in again after leaving the Promptopia
        website. At this time, the user will be asked confirm if they wish to
        grant application access every time they sign in.{' '}
      </p>
      <h2 className='mt-4 text-lg text-slate-800'>Withdraw Consent</h2>
      <p>
        You can manage Sign in with Google in your Google Account. If you don’t
        want us to process your data anymore, please contact us at
        <a
          href='mailto:amymrowell@gmail.com'
          className='text-blue-700'
          alt='link to email'>
          {' '}
          Email
        </a>
        .
      </p>
      <h2 className='mt-4 text-lg text-slate-800'>Privacy policy updates</h2>
      <p>
        We reserve the right to modify this privacy policy at any time, so
        please review it frequently. Changes and clarifications will take effect
        immediately upon their posting on the website. If we make material
        changes to this policy, we will notify you here that it has been
        updated, so that you are aware of what information we collect, how we
        use it, and under what circumstances, if any, we use and/or disclose it.
      </p>
      <h2 className='mt-4 text-lg text-slate-800'>
        Questions and your contact information
      </h2>
      <p>
        If you would like to: access, correct, amend or delete any personal
        information we have about you, you are invited to contact us at{' '}
        <a
          href='mailto:amymrowell@gmail.com'
          className='text-blue-700'
          alt='link to email'>
          Email
        </a>
        .
      </p>
    </section>
  );
};
export default Privacy;
