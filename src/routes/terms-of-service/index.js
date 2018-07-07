import React from 'react';
import { Typography } from '@material-ui/core';
import './index.css';

export default () => (
  <div className="tos legal-page">
    <Typography variant="display2">Joey Jiron Terms of Service</Typography>
    <Typography variant="title" gutterBottom>
      1. Terms
    </Typography>
    <Typography paragraph={true}>
      By accessing the website at{' '}
      <a href="https://joeyjiron06.github.io/food-journal">
        https://joeyjiron06.github.io/food-journal
      </a>, you are agreeing to be bound by these terms of service, all
      applicable laws and regulations, and agree that you are responsible for
      compliance with any applicable local laws. If you do not agree with any of
      these terms, you are prohibited from using or accessing this site. The
      materials contained in this website are protected by applicable copyright
      and trademark law.
    </Typography>
    <Typography variant="title" gutterBottom>
      2. Use License
    </Typography>

    <ol type="a">
      <li>
        <Typography paragraph gutterBottom>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Joey Jiron's website for
          personal, non-commercial transitory viewing only. This is the grant of
          a license, not a transfer of title, and under this license you may
          not:
        </Typography>
        <ol type="i">
          <li>
            <Typography paragraph>modify or copy the materials;</Typography>
          </li>
          <li>
            <Typography paragraph>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              attempt to decompile or reverse engineer any software contained on
              Joey Jiron's website;
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              remove any copyright or other proprietary notations from the
              materials; or
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </Typography>
          </li>
        </ol>
      </li>
      <li>
        <Typography paragraph>
          This license shall automatically terminate if you violate any of these
          restrictions and may be terminated by Joey Jiron at any time. Upon
          terminating your viewing of these materials or upon the termination of
          this license, you must destroy any downloaded materials in your
          possession whether in electronic or printed format.
        </Typography>
      </li>
    </ol>
    <Typography variant="title" gutterBottom>
      3. Disclaimer
    </Typography>
    <ol type="a">
      <li>
        <Typography paragraph>
          The materials on Joey Jiron's website are provided on an 'as is'
          basis. Joey Jiron makes no warranties, expressed or implied, and
          hereby disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </Typography>
      </li>
      <li>
        <Typography paragraph>
          Further, Joey Jiron does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on its website or otherwise relating to such materials
          or on any sites linked to this site.
        </Typography>
      </li>
    </ol>
    <Typography variant="title" gutterBottom>
      4. Limitations
    </Typography>
    <Typography paragraph={true}>
      In no event shall Joey Jiron or its suppliers be liable for any damages
      (including, without limitation, damages for loss of data or profit, or due
      to business interruption) arising out of the use or inability to use the
      materials on Joey Jiron's website, even if Joey Jiron or a Joey Jiron
      authorized representative has been notified orally or in writing of the
      possibility of such damage. Because some jurisdictions do not allow
      limitations on implied warranties, or limitations of liability for
      consequential or incidental damages, these limitations may not apply to
      you.
    </Typography>
    <Typography variant="title" gutterBottom>
      5. Accuracy of materials
    </Typography>
    <Typography paragraph={true}>
      The materials appearing on Joey Jiron's website could include technical,
      typographical, or photographic errors. Joey Jiron does not warrant that
      any of the materials on its website are accurate, complete or current.
      Joey Jiron may make changes to the materials contained on its website at
      any time without notice. However Joey Jiron does not make any commitment
      to update the materials.
    </Typography>
    <Typography variant="title" gutterBottom>
      6. Links
    </Typography>
    <Typography paragraph={true}>
      Joey Jiron has not reviewed all of the sites linked to its website and is
      not responsible for the contents of any such linked site. The inclusion of
      any link does not imply endorsement by Joey Jiron of the site. Use of any
      such linked website is at the user's own risk.
    </Typography>
    <Typography variant="title" gutterBottom>
      7. Modifications
    </Typography>
    <Typography paragraph={true}>
      Joey Jiron may revise these terms of service for its website at any time
      without notice. By using this website you are agreeing to be bound by the
      then current version of these terms of service.
    </Typography>
    <Typography variant="title" gutterBottom>
      8. Governing Law
    </Typography>
    <Typography paragraph={true}>
      These terms and conditions are governed by and construed in accordance
      with the laws of washington and you irrevocably submit to the exclusive
      jurisdiction of the courts in that State or location.
    </Typography>
  </div>
);
