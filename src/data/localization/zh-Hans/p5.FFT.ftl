description__0 = FFT (Fast Fourier Transform) is an analysis algorithm that isolates individual <a href="https://en.wikipedia.org/wiki/Audio_frequency"> audio frequencies</a> within a waveform.
description__1 = Once instantiated, a p5.FFT object can return an array based on two types of analyses: • <code>FFT.waveform()</code> computes amplitude values along the time domain. The array indices correspond to samples across a brief moment in time. Each value represents amplitude of the waveform at that sample of time. • <code>FFT.analyze() </code> computes amplitude values along the frequency domain. The array indices correspond to frequencies (i.e. pitches), from the lowest to the highest that humans can hear. Each value represents amplitude at that slice of the frequency spectrum. Use with <code>getEnergy()</code> to measure amplitude at specific frequencies, or within a range of frequencies.
description__2 = FFT analyzes a very short snapshot of sound called a sample buffer. It returns an array of amplitude measurements, referred to as <code>bins</code>. The array is 1024 bins long by default. You can change the bin array length, but it must be a power of 2 between 16 and 1024 in order for the FFT algorithm to function correctly. The actual size of the FFT buffer is twice the number of bins, so given a standard sample rate, the buffer is 2048/44100 seconds long.
params__smoothing = Number: (Optional) Smooth results of Freq Spectrum.  0.0 < smoothing < 1.0.  Defaults to 0.8.
params__bins = Number: (Optional) Length of resulting array.  Must be a power of two between  16 and 1024. Defaults to 1024.
setInput__description__0 = Set the input source for the FFT analysis. If no source is provided, FFT will analyze all sound in the sketch.
setInput__params__source = Object: (Optional) p5.sound object (or web audio API source node)
waveform__description__0 = Returns an array of amplitude values (between -1.0 and +1.0) that represent a snapshot of amplitude readings in a single buffer. Length will be equal to bins (defaults to 1024). Can be used to draw the waveform of a sound.
waveform__returns = Array: Array Array of amplitude values (-1 to 1)  over time. Array length = bins.
waveform__params__bins = Number: (Optional) Must be a power of two between  16 and 1024. Defaults to 1024.
waveform__params__precision = String: (Optional) If any value is provided, will return results  in a Float32 Array which is more precise  than a regular array.
analyze__description__0 = Returns an array of amplitude values (between 0 and 255) across the frequency spectrum. Length is equal to FFT bins (1024 by default). The array indices correspond to frequencies (i.e. pitches), from the lowest to the highest that humans can hear. Each value represents amplitude at that slice of the frequency spectrum. Must be called prior to using <code>getEnergy()</code>.
analyze__returns = Array: spectrum Array of energy (amplitude/volume)  values across the frequency spectrum.  Lowest energy (silence) = 0, highest  possible is 255.
analyze__params__bins = Number: (Optional) Must be a power of two between  16 and 1024. Defaults to 1024.
analyze__params__scale = Number: (Optional) If "dB," returns decibel  float measurements between  -140 and 0 (max).  Otherwise returns integers from 0-255.
getEnergy__description__0 = Returns the amount of energy (volume) at a specific <a href="https://en.wikipedia.org/wiki/Audio_frequency" target="_blank"> frequency</a>, or the average amount of energy between two frequencies. Accepts Number(s) corresponding to frequency (in Hz), or a String corresponding to predefined frequency ranges ("bass", "lowMid", "mid", "highMid", "treble"). Returns a range between 0 (no energy/volume at that frequency) and 255 (maximum energy). <em>NOTE: analyze() must be called prior to getEnergy(). Analyze() tells the FFT to analyze frequency data, and getEnergy() uses the results determine the value at a specific frequency or range of frequencies.</em>
getEnergy__returns = Number: Energy Energy (volume/amplitude) from  0 and 255.
getEnergy__params__frequency1 = Number|String: Will return a value representing  energy at this frequency. Alternately,  the strings "bass", "lowMid" "mid",  "highMid", and "treble" will return  predefined frequency ranges.
getEnergy__params__frequency2 = Number: (Optional) If a second frequency is given,  will return average amount of  energy that exists between the  two frequencies.
getCentroid__description__0 = Returns the <a href="http://en.wikipedia.org/wiki/Spectral_centroid" target="_blank"> spectral centroid</a> of the input signal. <em>NOTE: analyze() must be called prior to getCentroid(). Analyze() tells the FFT to analyze frequency data, and getCentroid() uses the results determine the spectral centroid.</em>
getCentroid__returns = Number: Spectral Centroid Frequency Frequency of the spectral centroid in Hz.
smooth__description__0 = Smooth FFT analysis by averaging with the last analysis frame.
smooth__params__smoothing = Number: 0.0 < smoothing < 1.0.  Defaults to 0.8.
linAverages__description__0 = Returns an array of average amplitude values for a given number of frequency bands split equally. N defaults to 16. <em>NOTE: analyze() must be called prior to linAverages(). Analyze() tells the FFT to analyze frequency data, and linAverages() uses the results to group them into a smaller set of averages.</em>
linAverages__returns = Array: linearAverages Array of average amplitude values for each group
linAverages__params__N = Number: Number of returned frequency groups
logAverages__description__0 = Returns an array of average amplitude values of the spectrum, for a given set of <a href="https://en.wikipedia.org/wiki/Octave_band" target="_blank"> Octave Bands</a> <em>NOTE: analyze() must be called prior to logAverages(). Analyze() tells the FFT to analyze frequency data, and logAverages() uses the results to group them into a smaller set of averages.</em>
logAverages__returns = Array: logAverages Array of average amplitude values for each group
logAverages__params__octaveBands = Array: Array of Octave Bands objects for grouping
getOctaveBands__description__0 = Calculates and Returns the 1/N <a href="https://en.wikipedia.org/wiki/Octave_band" target="_blank">Octave Bands</a> N defaults to 3 and minimum central frequency to 15.625Hz. (1/3 Octave Bands ~= 31 Frequency Bands) Setting fCtr0 to a central value of a higher octave will ignore the lower bands and produce less frequency groups.
getOctaveBands__returns = Array: octaveBands Array of octave band objects with their bounds
getOctaveBands__params__N = Number: Specifies the 1/N type of generated octave bands
getOctaveBands__params__fCtr0 = Number: Minimum central frequency for the lowest band
