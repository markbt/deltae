//! Manipulate and convert CIE L\*a\*b\* and Lch colors.
//!
//! # Examples
//!
//! ```
//! use deltae::*;
//! use std::str::FromStr;
//! use std::error::Error;
//!
//! fn main() -> Result<(), Box<dyn Error>> {
//!     let lab0 = LabValue::from_str("95.08, -0.17, -10.81")?;
//!     let lch0 = LchValue {
//!         l: 95.08,
//!         c: 10.811337,
//!         h: 269.09903,
//!     };
//!
//!     assert_eq!(lab0, lch0);
//!
//!     let lch0 = LchValue::from(lab0);
//!     let lab2 = LabValue::from(lch0);
//!
//!     println!("{}", lch0); // [L:89.73, c:7.2094, h:285.1157]
//!
//!     assert_eq!(lab0.round_to(4), lab2.round_to(4));
//!
//!     Ok(())
//! }
//! ```

use std::fmt;
use std::error::Error;

use crate::ValueResult;
use crate::validate::Validate;

/// # CIEL\*a\*b\*
///
/// | `Value` | `Color`               | `Range`          |
/// |:-------:|:---------------------:|:----------------:|
/// | `L*`    | `Light <---> Dark`    | `0 <---> 100`    |
/// | `a*`    | `Green <---> Magenta` | `-128 <---> 128` |
/// | `b*`    | `Blue  <---> Yellow`  | `-128 <---> 128` |
///
#[derive(Debug, Clone, Copy)]
pub struct LabValue {
    /// Lightness
    pub l: f32,
    /// Green - Magenta
    pub a: f32,
    /// Blue - Yellow
    pub b: f32,
}

impl LabValue {
    /// Returns a result of a LabValue from 3 `f32`s.
    /// Will return `Err()` if the values are out of range
    pub fn new(l: f32, a: f32, b: f32) -> ValueResult<LabValue> {
        LabValue {l, a, b}.validate()
    }
}

impl Default for LabValue {
    fn default() -> LabValue {
        LabValue { l: 0.0, a: 0.0, b: 0.0 }
    }
}

impl fmt::Display for LabValue {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[L:{}, a:{}, b:{}]", self.l, self.a, self.b)
    }
}

/// # Lch: Luminance, Chroma, Hue
///
/// | `Value` | `Color`                    | `Range`            |
/// |:-------:|:--------------------------:|:------------------:|
/// | `L*`    | `Light <---> Dark`         | `0 <---> 100`      |
/// | `c`     | `Chroma (Amount of color)` | `0 <---> 181.0139` |
/// | `h`     | `Hue (Degrees)`            | `0 <---> 360°`     |
///
#[derive(Debug, Clone, Copy)]
pub struct LchValue {
    /// Lightness
    pub l: f32,
    /// Chroma
    pub c: f32,
    /// Hue (in degrees)
    pub h: f32,
}

impl LchValue {
    /// Returns a result of an LchValue from 3 `f32`s.
    /// Will return `Err()` if the values are out of range
    pub fn new(l: f32, c: f32, h: f32) -> ValueResult<LchValue> {
        LchValue { l, c, h }.validate()
    }

    /// Returns the Hue as radians rather than degrees
    pub fn hue_radians(&self) -> f32 {
        self.h.to_radians()
    }
}

impl Default for LchValue {
    fn default() -> LchValue {
        LchValue { l: 0.0, c: 0.0, h: 0.0 }
    }
}

impl fmt::Display for LchValue {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[L:{}, c:{}, h:{}]", self.l, self.c, self.h)
    }
}

/// # XYZ
///
/// | `Value` | `Color` | `Range`     |
/// |:-------:|:-------:|:-----------:|
/// | `X`     | `Red`   | `0 <---> 1` |
/// | `Y`     | `Green` | `0 <---> 1` |
/// | `Z`     | `Blue`  | `0 <---> 1` |
///
#[derive(Debug, Clone, Copy)]
pub struct XyzValue {
    /// X Value
    pub x: f32,
    /// Y Value
    pub y: f32,
    /// Z Value
    pub z: f32,
}

impl XyzValue {
    /// Returns a result of an XyzValue from 3 `f32`s.
    /// Will return `Err()` if the values are out of range
    pub fn new(x: f32, y: f32, z:f32) -> ValueResult<XyzValue> {
        XyzValue {x, y, z}.validate()
    }
}

impl Default for XyzValue {
    fn default() -> XyzValue {
        XyzValue { x: 0.0, y: 0.0, z: 0.0 }
    }
}

impl fmt::Display for XyzValue {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[X:{}, Y:{}, Z:{}]", self.x, self.y, self.z)
    }
}

#[derive(Debug)]
/// Value validation Error type
pub enum ValueError {
    /// The value is outside the acceptable range
    OutOfBounds,
    /// The value is formatted incorrectly
    BadFormat,
}

impl fmt::Display for ValueError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.description())
    }
}

impl ValueError {
    fn description(&self) -> &str {
        match self {
            ValueError::OutOfBounds => "Value is out of range!",
            ValueError::BadFormat   => "Value is malformed!",
        }
    }
}

impl Error for ValueError {}
