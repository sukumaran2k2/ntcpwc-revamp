import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [forgotMode, setForgotMode] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [focusU, setFocusU] = useState(false);
  const [focusP, setFocusP] = useState(false);
  const [focusE, setFocusE] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // hook up your auth logic here
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="login-page">

      {/* LEFT PANEL — branding */}
      <div className="login-panel login-panel--left">
        <div className="login-panel__bg" />
        <div className="login-panel__grid" />
        <div className="login-panel__content">
          <div className="login-brand">
            <img src="/assets/logo-dark.png" alt="NTCPWC" className="login-brand__logo" />
          </div>
          <div className="login-panel__text">
            <h2 className="login-panel__heading">
              Powering India's<br />maritime future.
            </h2>
            <p className="login-panel__sub">
              Staff portal for NTCPWC — National Technology Centre for Ports, Waterways and Coasts, IIT Madras.
            </p>
            <div className="login-panel__badges">
              <span className="login-badge">IIT Madras</span>
              <span className="login-badge">Ministry of Ports</span>
              <span className="login-badge">Sagarmala</span>
            </div>
          </div>
          <p className="login-panel__footer">© {new Date().getFullYear()} NTCPWC · IIT Madras</p>
        </div>
      </div>

      {/* RIGHT PANEL — form */}
      <div className="login-panel login-panel--right">
        <div className="login-form-wrap">

          {/* Mobile logo */}
          <div className="login-mobile-brand">
            <img src="/assets/logo-light.png" alt="NTCPWC" className="login-mobile-brand__logo" />
          </div>

          {!forgotMode ? (
            <>
              <div className="login-form-header">
                <h1 className="login-form-title">Staff Login</h1>
                <p className="login-form-sub">Sign in with your NTCPWC credentials</p>
              </div>

              <form className="login-form" onSubmit={handleLogin} autoComplete="off">

                {/* USERNAME */}
                <div className={`login-field ${focusU || username ? 'login-field--active' : ''}`}>
                  <label className="login-field__label">Username</label>
                  <div className="login-field__wrap">
                    <svg className="login-field__icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a4 4 0 118 0A4 4 0 016 8zM1.665 17.752a8.5 8.5 0 0116.67 0 .75.75 0 01-.736.998H2.4a.75.75 0 01-.736-.998z"/>
                    </svg>
                    <input
                      type="text"
                      className="login-field__input"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      onFocus={() => setFocusU(true)}
                      onBlur={() => setFocusU(false)}
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div className={`login-field ${focusP || password ? 'login-field--active' : ''}`}>
                  <label className="login-field__label">Password</label>
                  <div className="login-field__wrap">
                    <svg className="login-field__icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                      <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd"/>
                    </svg>
                    <input
                      type={showPass ? 'text' : 'password'}
                      className="login-field__input"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      onFocus={() => setFocusP(true)}
                      onBlur={() => setFocusP(false)}
                      placeholder="Enter your password"
                      required
                    />
                    <button type="button" className="login-field__eye" onClick={() => setShowPass(s => !s)} tabIndex={-1}>
                      {showPass ? (
                        <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                          <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
                          <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                          <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd"/>
                          <path d="M10.748 13.93l2.523 2.523a10.027 10.027 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.033 10.033 0 012.49 6.107l1.19 1.19a8.5 8.5 0 009.068 6.633z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button type="submit" className="login-submit">
                  Sign in
                  <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
                  </svg>
                </button>

                <button type="button" className="login-forgot" onClick={() => setForgotMode(true)}>
                  Forgot password?
                </button>

              </form>
            </>
          ) : (
            <>
              <div className="login-form-header">
                <button className="login-back" onClick={() => { setForgotMode(false); setSent(false); }}>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                    <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd"/>
                  </svg>
                  Back to login
                </button>
                <h1 className="login-form-title">Reset password</h1>
                <p className="login-form-sub">{sent ? 'Check your inbox for reset instructions.' : 'Enter your registered email address.'}</p>
              </div>

              {!sent ? (
                <form className="login-form" onSubmit={handleForgot}>
                  <div className={`login-field ${focusE || email ? 'login-field--active' : ''}`}>
                    <label className="login-field__label">Email address</label>
                    <div className="login-field__wrap">
                      <svg className="login-field__icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"/>
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"/>
                      </svg>
                      <input
                        type="email"
                        className="login-field__input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => setFocusE(true)}
                        onBlur={() => setFocusE(false)}
                        placeholder="you@iitm.ac.in"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="login-submit">
                    Send reset link
                    <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </form>
              ) : (
                <div className="login-sent">
                  <div className="login-sent__icon">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="login-sent__msg">Reset link sent to <b>{email}</b></p>
                  <button className="login-submit" onClick={() => { setForgotMode(false); setSent(false); }}>Back to login</button>
                </div>
              )}
            </>
          )}

          <p className="login-help">
            Need access? Contact{' '}
            <a href="mailto:ntcpwc@iitm.ac.in">ntcpwc@iitm.ac.in</a>
          </p>

        </div>
      </div>

    </div>
  );
}
