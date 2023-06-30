import { Container } from './Container';

export const Footer = (props) => {
  const { className, children, ...attrs } = props;

  return (
    <div
      className={`border-t-[0.5px] border-black border-opacity-10 py-8 dark:border-dark-light ${
        className || ''
      }`}
      {...attrs}
    >
      <Container>
        {/* Copy */}
        <div className="text-sm space-y-4 text-center">
          <div className="dark:text-dark-lightGray">
            Code licensed under{' '}
            <a
              href="https://github.com/konstaui/konsta/blob/main/LICENSE"
              target="_blank"
              className="text-primary hover:underline"
            >
              MIT
            </a>
            .
          </div>
          <div className='dark:text-dark-lightGray'>
            2022 © Konsta UI by{' '}
            <a href="https://nolimits4web.com" target="_blank">
              <img
                className="w-12 h-12 inline-block"
                src="/images/n4w-logo.svg"
                alt="nolimits4web"
              />
            </a>
            .
          </div>
        </div>
        {children}
      </Container>
    </div>
  );
};
