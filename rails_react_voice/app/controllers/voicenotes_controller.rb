class VoicenotesController < ApplicationController
	def index
		@voice_notes = VoiceNote.all
		respond_do |format|
	    format.json {render json: @voice_notes}
	  end
	end

	def add_voice_to_storage
		audio = params[:audio]
    myaudio = VoiceNote.create(name: 'test')
    myaudio.song_file.attach(io: StringIO.new(audio), filename: 'first')
	end
end