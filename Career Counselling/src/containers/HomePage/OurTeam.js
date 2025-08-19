// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'
import Icons from '../../components/Icons'
import PeopleIcon from '@material-ui/icons/People'

import collegeaiTeam from './assets/collegeai_team.png'

import { withStyles } from '@material-ui/core/styles'
import peopleSvg from './assets/people.svg'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {
    textAlign: 'center',
    backgroundColor:  '#17252a'
  },
  peopleIcon: {
    fontSize: 128,
    color: green[200]
  },
  socialMediaIconContainer: {
    display: 'inline-flex'
  },
  ourTeamContainer: {
    textAlign: 'left',
    padding: '48px 48px 64px'
  },
  teamText: {
    color: '#fff',
    maxWidth: 800
  },
  teamDescription: {
    paddingBottom: 12
  }
})

export class OurTeam extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div
          style={{
            display: 'inline-block',
            maxWidth: 1200
          }}
        >
          <Grid container justify="center">
            {/* <Grid item md={4} xs={12}>
              <img
                src={collegeaiTeam}
                style={{
                  width: '100%',
                  display: 'inline-flex',
                  objectFit: 'cover'
                }}
              /> 
            </Grid> */}
            <Grid item md={8} xs={12} container justify="center">
              <div className={classes.ourTeamContainer}>
                <Typography
                  className={classes.teamText}
                  variant="display1"
                  gutterBottom
                >
                  About 
                </Typography>
                <Typography
                  className={classnames(
                    classes.teamDescription,
                    classes.teamText
                  )}
                  variant="subheading"
                  gutterBottom
                >
                  One of the most respected names in India is the domain of career counselling, 
                  aptitude testing and study abroad counselling.Trusted by some of the most 
                  renowned schools of India as well as neighbouring countries such as DPS Kuwait,
                  DPS RK Puram, DPS Vasant Kunj, Presidium School, GD Goenka, Suncity Gurgaon, etc. 
                  We will help you discover the colleges that are right for you.                 
                </Typography>
                    
                <Typography className={classnames(
                    classes.teamDescription,
                    classes.teamText
                  )}
                  variant="subheading"
                  gutterBottom>
                   Contact :  +91 7419073895     |     +91 7015044244
                </Typography>

                <Typography className={classnames(
                    classes.teamDescription,
                    classes.teamText
                  )}
                  variant="subheading"
                  gutterBottom>
                     Email : sahildabar01@gmail.com 
                </Typography>
                <Typography>          
               
                <div className={classes.socialMediaIconContainer}>
                
                          <Icons
                            name="facebook"
                            style={{ color: '#3b5998', marginLeft: 11 }}
                          />

                          <Icons 
                          name="google" 
                          style={{ color: '#db3236', marginLeft: 11 }} />

                          <Icons
                            name="twitter"
                            style={{ color: '#00acee', marginLeft: 11 }}
                          />
                          <Icons
                            name="instagram"
                            style={{ color: '#bc2a8d', marginLeft: 11 }}
                          />
                        </div>
                        
                </Typography>






 
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(OurTeam)
