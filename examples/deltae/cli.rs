use clap::{App, Arg, crate_version, crate_description, crate_authors};

pub fn app() -> App<'static, 'static> {
    App::new("deltae")
        .version(crate_version!())
        .about(crate_description!())
        .author(crate_authors!())
        .arg(Arg::with_name("METHOD")
            .help("Set DeltaE method")
            .long("method")
            .short("m")
            .possible_values(&["2000", "1994", "1994T", "CMC1", "CMC2", "1976"])
            .case_insensitive(true)
            .default_value("2000")
            .takes_value(true))
        .arg(Arg::with_name("COLOR0")
            .help("Reference color values")
            .required(true))
        .arg(Arg::with_name("COLOR1")
            .help("Sample color values")
            .required(true))
        .arg(Arg::with_name("COLORTYPE")
            .help("Set color type")
            .short("c")
            .long("color-type")
            .aliases(&["color", "type"])
            .default_value("lab")
            .possible_values(&["lab", "lch", "xyz", "rgb"]))
}
